module.exports= function($scope, $state, TestService){
		console.log('enter controller_815')
		$scope.test = TestService.getTest()
	}
