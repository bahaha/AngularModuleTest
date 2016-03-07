module.exports= function($scope, $state, TestService){
		console.log('enter controller_363')
		$scope.test = TestService.getTest()
	}
